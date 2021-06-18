

const useSumeTotal = () => {

    const SumTotal = (array) =>{
        console.log(array)
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = array.reduce(reducer, 0);

        console.log("sum")
        console.log(sum)
        return sum;
      }

      return SumTotal;
}

export default useSumeTotal;