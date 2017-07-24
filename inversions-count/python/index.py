"""Merge sort algorithm example"""
BASE_CASE_SIZE = 1


def inversion_count(array_to_count):
    """Accepts list or touples and returns number of inversions"""
    inversion_counter = 0

    def _merge_sort(input_array):
        """Accepts list or touples and returns sorted list"""
        input_length = len(input_array)

        if input_length <= BASE_CASE_SIZE:
            return input_array

        middle = input_length // 2

        return _merge(
            _merge_sort(input_array[:middle]),
            _merge_sort(input_array[middle:]),
            input_length
        )

    def _merge(left, right, input_length):
        """Merging subroutine of merge_sort"""
        nonlocal inversion_counter
        result = []
        index = 0
        left_index = 0
        right_index = 0
        left_length = len(left)
        right_length = len(right)

        while index <= input_length:
            if left_index == left_length:
                result.extend(right[right_index:])
                break

            if right_index == right_length:
                result.extend(left[left_index:])

                break

            left_value = left[left_index]
            right_value = right[right_index]

            if left_value < right_value:
                result.append(left_value)
                left_index += 1

            else:
                result.append(right_value)
                right_index += 1
                inversion_counter += left_length - left_index

            index += 1

        return result

    _merge_sort(array_to_count)

    return inversion_counter
