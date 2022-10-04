puts "📃 Seeding Customer..."
# User.create(username: "ndishaw")
Customer.create([
    {
        names: "one",
        email: "one@gmail.com",
        phone_no: "07123456789",
        address: "Kisumu",
        licence_no: "123456789"
    },
    {
        names: "two",
        email: "two@gmail.com",
        phone_no: "078945623125",
        address: "Thika",
        licence_no: "213456789"
    },
    {
        names: "three",
        email: "three@gmail.com",
        phone_no: "8954742354",
        address: "Kiambu",
        licence_no: "312456789"
    }
])
puts "✅ Done Customer"

puts "📃 Seeding User..."
puts "✅ Done seeding"