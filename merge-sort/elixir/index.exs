defmodule Sort do
  def merge_sort(input) when length(input) <= 1 do
    input
  end

  def merge_sort(input) do
    splitting_point = length(input) |> div(2)
    { left, right } = Enum.split(input, splitting_point)
    :lists.merge(merge_sort(left), merge_sort(right))
  end
end

#Or just use Enum.sort - it uses merge sort anyway
