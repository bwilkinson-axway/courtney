exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                  address: "5805 Melstone Dr",
                  listPrice: 223,000,
                  beds: 3,
                  baths: 3,
                  sqfoot: 1704,
                  sqlot: 7231,
                  description: "Adorable one story in charming Arlington neighborhood. Updates throughout, from the beautiful wood looking luxury vinyl plank floors to the gorgeous light fixtures! You will love entertaining in this open living and dining with double doors to a large backyard! Amazing master bathroom perfect for unwinding after a busy day! Seller is providing a one year home warranty! Don't miss out on this spectacular home!!",
                  imgUrl: "https://ap.rdcpix.com/2918851701/da5b0f6ce87d929d8750e347156c4358l-m0xd-w1020_h770_q80.jpg",
                  sold: true
                },
                {
                  address: "10248 Almondtree Dr",
                  listPrice: 300,000,
                  beds: 4,
                  baths: 2,
                  sqfoot: 1819,
                  sqlot: 8146,
                  description: "Quiet Neighborhood in Ft worth, Everman ISD. 4 Bedroom 2 bathroom, one owner home, well kept. Upgraded lighting, ceiling fans in all bedrooms. No neighbors behind or to your right, backing up to an open field. Corner lot with large back yard. Do not miss out on this home!",
                  imgUrl: "https://ap.rdcpix.com/2086699541/b1b81230c670fb7de2df5b2d35420d45l-m0xd-w1020_h770_q80.jpg"
                },
            ])
        })
}
