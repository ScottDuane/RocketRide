json.array!(@reservations) do |reservation|
  json.partial!('reservation', reservation: reservation)
end
