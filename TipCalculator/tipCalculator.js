window.onload = ()=>{
  const input = document.getElementById('inputBill');
  const tip = document.getElementById('tipSlider')
  const split = document.getElementById('splitSlider')
  tip.value = 0
  split.value = 1
  let inputAmount = 0;
  let calculatedTip = 0;
  let totalAmount = 0;
  let totalTip = 0;
  let numberPeople = 1
  let billEach = totalAmount
  let tipEach = totalTip

  const updateStats = ()=>{
    document.getElementById('totalAmount').innerHTML = '$' + totalAmount
    document.getElementById('percentage').innerHTML = `${tip.value}%`
    document.getElementById('numberPeople').innerHTML = `${numberPeople} People`
    document.getElementById('tipAmount').textContent = '$'+calculatedTip
    document.getElementById('totalAmount').innerHTML = '$' + totalAmount
    document.getElementById('billEachAmount').innerHTML = billEach
    document.getElementById('tipEachAmount').innerHTML = tipEach

  }

  updateStats()

  input.addEventListener('input', ()=>{
    inputAmount = input.value;
    totalAmount = (Number(inputAmount) + calculatedTip)
    billEach = totalAmount/numberPeople
    tipEach = calculatedTip/numberPeople
    updateStats()

  })
  tip.addEventListener('input', ()=>{
    calculatedTip = (tip.value/100) * inputAmount
    totalAmount = (Number(inputAmount) + calculatedTip)
    billEach = Number(inputAmount)/numberPeople
    tipEach = calculatedTip/numberPeople
    updateStats()

  })
  split.addEventListener('input', ()=>{
    numberPeople = Number(split.value)
    billEach = totalAmount/numberPeople
    tipEach = calculatedTip/numberPeople
    updateStats()

   
  })
  



}