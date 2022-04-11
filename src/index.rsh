// 'reach 0.1';

// const ICommon = {
//     seeWinningBid: Fun([Address, UInt], Null),
//     observeTimeout: Fun([], Null),
// };
// export const main = Reach.App(
//     {}, [
//     Participant('Auctioner', {
//         ...ICommon,
//         getParams: Fun([], Object({
//             deadline: UInt,
//             minPrice: UInt,
//         })),
//     }),
//     ParticipantClass('Buyer', {
//         ...ICommon,
//         ...hasRandom,

//         bid: Fun([UInt], UInt),

//         mayBid: Fun([UInt], Bool),

//         madeBid: Fun([], Null),
//     })
// ], (Auctioner, Buyer) => {
//     Auctioner.only(() => {
//         const _params = interact.getParams();
//         const [deadline, minPrice] = declassify([_params.deadline, _params.minPrice]);
//     });
//     Auctioner.publish(deadline, minPrice);
//     commit();

//     Buyer.only(() => {
//         const _bid = interact.bid(minPrice);
//         assume(minPrice < _bid);
//     });
//     Buyer.publish();

//     const [timeRemaining, keepGoing] = makeDeadline(20);
//     const [latestPrice, winner] = parallelReduce([minPrice, Auctioner])
//         .invariant(balance() == 0)
//         .while(keepGoing())
//         .case(Buyer,
//             (() => ({
//                 when: declassify(_bid) > latestPrice,
//                 msg: [declassify(_bid), this]
//             })),
//             ((msg) => 0),
//             ((msg) => {
//                 return msg;
//             })
//         )
//         .timeRemaining(timeRemaining());

//     commit();
//     Buyer.only(() => {
//         const myAddress = this
//     });
//     Buyer.publish(myAddress).pay(latestPrice).when(myAddress == winner).timeout(200, () => {
//         each([Auctioner, Buyer], () => {
//             interact.observeTimeout();
//         });
//         Anybody.publish();
//         commit();
//     });

//     transfer(balance()).to(Auctioner);

//     commit();
//     each([Auctioner, Buyer], () => {
//         interact.seeWinningBid(winner, latestPrice);
//     });


// });