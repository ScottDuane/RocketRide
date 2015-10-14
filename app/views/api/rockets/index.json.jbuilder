json.array!(@rockets) do |rocket|
  json.partial!('rocket', rocket: rocket)
end
