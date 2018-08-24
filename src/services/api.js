export const getTransactionHistory = async (userId = 0) => {
  try {
    const response = await fetch(`http://technicalchallenge-env.tmqmrias2g.us-east-1.elasticbeanstalk.com/transaction/${userId}`);
    const data = await response.json();
    return data;
  }
  catch(e) {
    throw e
  }
}
