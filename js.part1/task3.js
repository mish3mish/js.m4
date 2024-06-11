function countTotalSalary(salaries) {
    let totalSalary = 0;
    const values = Object.values(salaries);
    for (const value of values) {
      totalSalary.push(salaries[key]);
    }
    return totalSalary;
  }

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })) // 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })) // 400