

const useSumeTotal = () => {

    const SumTotal = (array) =>{
        const reducer = (accumulator, currentValue) => accumulator + (currentValue.price * currentValue.amount);
        const sum = array.reduce(reducer, 0);
        return sum;
      }

      return SumTotal;
}

export default useSumeTotal;