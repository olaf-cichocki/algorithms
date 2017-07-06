defmodule Sort do
  def merge_sort(input) when length(input) <= 1 do
    input
  end

  def merge_sort(input) do
    { left, right } = Enum.split(input, length(input) |> div(2))
    :lists.merge(merge_sort(left), merge_sort(right))
  end
end

#Or just use Enum.sort - it uses merge sort anyway
