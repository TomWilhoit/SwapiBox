export const randomNumberGen = () => {
  let ranNum = Math.floor(Math.random() * 6);
  this.setState({
    randomNum: ranNum
  });
};