export const getTransactionHistory = (userId = 0) => {
  return fetch(`http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/{userid}`);
}
