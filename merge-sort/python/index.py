import math

BASE_CASE_SIZE = 1


def merge_sort(input_array):
    """Accepts list or touples and returns sorted list"""
    input_length = len(input_array)

    if input_length <= BASE_CASE_SIZE:
        return input_array

    split_point = math.floor(input_length / 2)

    return merge(
        merge_sort(input_array[:split_point]),
        merge_sort(input_array[split_point:]),
        input_length
    )


def merge(left, right, input_length):
    """Merging subroutine of merge_sort"""
    result = []
    left_index = 0
    right_index = 0
    left_length = len(left)
    right_length = len(right)

    for index in range(0, input_length):
        if left_index == left_length:
            result.extend(right[right_index:])
            break

        if right_index == right_length:
            result.extend(left[left_index:])
            break

        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1

        else:
            result.append(right[right_index])
            right_index += 1

    return result
