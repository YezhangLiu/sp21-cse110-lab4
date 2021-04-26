for (const cars in statistics) {
  if(cars.charAt(0) === 'r' || statistics[cars] % 2 !== 0){
    console.log(`${cars}: ${statistics[cars]}`);
  }
}
