function checkYuGiOh(n){
	k= Number (n)
	if (isNaN(k)) return "invalid parameter: " + n
	const array =[]
	for (let i =1; i <=k; i++){
		if (i%30==0){
			array.push("yu-gi-oh")
		}
		else if (i%15==15){
			array.push("gi-oh")
		}
		else if (i%10==0){
			array.push("yu-oh")
		}
		else if (i%6==0){
			array.push("yu-gi")
		}
		else if (i%5==0){
			array.push("oh")
		}
		else if (i%3==0){
			array.push("gi")
		}
		else if (i%2==0){
			array.push("yu")
		}
		else array.push(i)
	}
	return array
}
console.log(checkYuGiOh("10"))
