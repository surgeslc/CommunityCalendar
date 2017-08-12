
exports.seed = function(knex, Promise) {
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        knex('activities').insert({id: 1, place_id: 2, name: 'Sportball - Parent and Child Indoor Multi-Sport(2-3 YRS)', description: 'Focusing on physical literacy and social exploration as toddlers learn fundamental sport skills and participate in creative motor games, in 8 different popular sports. Children are challenged according to their individual skill level and grownups are taught techniques to help toddlers refine motor skills while developing social skills.', start_date: 'July 8th, 2017', end_date: 'August 26th, 2017', price_range: 3, source: 'http://www.oaklandscommunitycentre.com/recreation/preschool'}),
        knex('activities').insert({id: 2, place_id: 2, name: 'Kids At Tennis Society (KATS) Tennis Lessons (9-13 YRS)', description: "Using Tennis Canada's progrssive tennis approach we supply smaller raquets and courts, lower nets and low compression balls. All of these are designed to help kids begin to develop confidence in their ability to hit the ball and allows them to be successful very quickly. This program is sponsered by KATS and free for those participants who qualify. L.I.F.E. program members are pre-qualified", start_date: 'June 29th, 2017', end_date: 'August 31st, 2017', price_range: 0 , source: 'http://www.oaklandscommunitycentre.com/recreation/youth'}),
        knex('activities').insert({id: 3, place_id: 2, name: 'High Intensity Interval Training (HIIT)', description: 'HITT is a total body, heart pumping, aerobic and strength conditioning workout. This interval-based class combines full-body strength training with high intensity cardio bursts designed to tone your body. Expect warm up and cool down times with a half hour HIIT session, between, outdoors if possible. Modifications for all fitness levels are provided.', start_date: 'August 3rd, 2017', end_date: 'September 7th, 2017', price_range: 2, source: 'http://www.oaklandscommunitycentre.com/recreation/adults'}),
        knex('activities').insert({id: 4, place_id: 2, name: 'Bedtime Yoga' , description: 'Ease tension, release stress, and calm the mind with gentle postures and relaxing breathing practices. This class will help prepare the body, mind and spiritfor a restful sleep. Yoga mats and blocks available.', start_date: 'June 26th, 2017', end_date: 'August 28th, 2017', price_range: 2, source: 'http://www.oaklandscommunitycentre.com/recreation/adults'}),
        knex('activities').insert({id: 5, place_id: 2, name: 'Community Dinner and Games Night', description: 'Come join us for a community-centred evening the last Sunday of the month except December, July and August. Meet your neighbours, share a meal, and have a laugh while playing cards and board games. All ages welcome.', start_date: 'June 25th, 2017', end_date: 'June 25th, 2017', price_range: 0, source: 'http://www.oaklandscommunitycentre.com/recreation/adults'}),
      ]);
    });
};