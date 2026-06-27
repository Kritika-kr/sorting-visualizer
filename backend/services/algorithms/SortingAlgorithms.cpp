#include "services/algorithms/SortingAlgorithms.h"

#include <algorithm>
#include <functional>

namespace studio {

StepResponse SortingAlgorithms::run(const std::string& algorithm, std::vector<int> values) const {
  StepResponse response;
  auto emit = [&](std::string action, int i, int j, int line, std::string note) {
    AnimationStep step;
    step.action = std::move(action);
    step.index = i;
    step.i = i;
    step.j = j;
    step.value = i >= 0 ? values[i] : 0;
    step.line = line;
    step.note = std::move(note);
    step.snapshot = values;
    response.steps.push_back(std::move(step));
  };
  auto compare = [&](int i, int j) {
    response.stats.comparisons++;
    emit("compare", i, j, 3, "Compare two values");
  };
  auto swapValues = [&](int i, int j) {
    std::swap(values[i], values[j]);
    response.stats.swaps++;
    emit("swap", i, j, 4, "Swap two values");
  };

  if (algorithm == "selection-sort") {
    for (int i = 0; i < static_cast<int>(values.size()); ++i) {
      int minIndex = i;
      for (int j = i + 1; j < static_cast<int>(values.size()); ++j) {
        compare(minIndex, j);
        if (values[j] < values[minIndex]) minIndex = j;
      }
      if (minIndex != i) swapValues(i, minIndex);
      emit("mark-sorted", i, -1, 7, "Position is sorted");
    }
  } else if (algorithm == "insertion-sort") {
    for (int i = 1; i < static_cast<int>(values.size()); ++i) {
      int j = i;
      while (j > 0) {
        compare(j - 1, j);
        if (values[j - 1] <= values[j]) break;
        swapValues(j - 1, j);
        --j;
      }
    }
  } else if (algorithm == "merge-sort") {
    std::function<void(int, int, int)> sort = [&](int left, int right, int depth) {
      response.stats.recursionDepth = std::max(response.stats.recursionDepth, depth);
      if (left >= right) return;
      int mid = left + (right - left) / 2;
      sort(left, mid, depth + 1);
      sort(mid + 1, right, depth + 1);
      std::vector<int> merged;
      int i = left;
      int j = mid + 1;
      while (i <= mid && j <= right) {
        compare(i, j);
        merged.push_back(values[i] <= values[j] ? values[i++] : values[j++]);
      }
      while (i <= mid) merged.push_back(values[i++]);
      while (j <= right) merged.push_back(values[j++]);
      for (int offset = 0; offset < static_cast<int>(merged.size()); ++offset) {
        values[left + offset] = merged[offset];
        emit("overwrite", left + offset, -1, 4, "Write merged value");
      }
    };
    sort(0, static_cast<int>(values.size()) - 1, 1);
  } else if (algorithm == "quick-sort") {
    std::function<void(int, int, int)> sort = [&](int low, int high, int depth) {
      response.stats.recursionDepth = std::max(response.stats.recursionDepth, depth);
      if (low >= high) return;
      emit("pivot", high, -1, 1, "Choose pivot");
      int pivot = values[high];
      int i = low;
      for (int j = low; j < high; ++j) {
        compare(j, high);
        if (values[j] < pivot) swapValues(i++, j);
      }
      swapValues(i, high);
      sort(low, i - 1, depth + 1);
      sort(i + 1, high, depth + 1);
    };
    sort(0, static_cast<int>(values.size()) - 1, 1);
  } else if (algorithm == "heap-sort") {
    std::function<void(int, int)> heapify = [&](int size, int root) {
      int largest = root;
      int left = root * 2 + 1;
      int right = root * 2 + 2;
      if (left < size) {
        compare(largest, left);
        if (values[left] > values[largest]) largest = left;
      }
      if (right < size) {
        compare(largest, right);
        if (values[right] > values[largest]) largest = right;
      }
      if (largest != root) {
        swapValues(root, largest);
        heapify(size, largest);
      }
    };
    for (int i = static_cast<int>(values.size()) / 2 - 1; i >= 0; --i) heapify(static_cast<int>(values.size()), i);
    for (int end = static_cast<int>(values.size()) - 1; end > 0; --end) {
      swapValues(0, end);
      emit("mark-sorted", end, -1, 7, "Extract max");
      heapify(end, 0);
    }
  } else {
    for (int i = 0; i < static_cast<int>(values.size()); ++i) {
      for (int j = 0; j + 1 < static_cast<int>(values.size()) - i; ++j) {
        compare(j, j + 1);
        if (values[j] > values[j + 1]) swapValues(j, j + 1);
      }
      emit("mark-sorted", static_cast<int>(values.size()) - i - 1, -1, 7, "Tail value is sorted");
    }
  }

  emit("complete", -1, -1, 7, "Sorting complete");
  response.stats.executionTimeMs = static_cast<int>(response.steps.size());
  response.stats.memoryBytes = static_cast<int>(values.size() * sizeof(int) + response.steps.size() * 64);
  return response;
}

}  // namespace studio
