# encoding: utf-8

$numbers = gets

def sum_two_numbers(numbers)  
    sum = numbers[0].to_i + numbers[1].to_i
    return sum
end


puts sum_two_numbers($numbers.split(' '))
