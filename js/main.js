// To animate menu
function showMenu() {
  document.querySelector( '.navigation' ).classList.toggle( 'active' );
  document.querySelector( '.menu' ).classList.toggle( 'hide' );
  document.querySelector( '.close' ).classList.toggle( 'show' );
}

// To display totals as active numbers
let lifeTotals = 5000000;
let riskTotals = 2000000;
let lifeTotalsPlaceholder = document.getElementById( "life-totals" );
let riskTotalsPlaceholder = document.getElementById( "risk-totals" );
lifeTotalsPlaceholder.textContent = lifeTotals;
riskTotalsPlaceholder.textContent = riskTotals;

// To display how many people one protects
let numberOfProtectedPeople = 5;
let protectedByYouPlaceholder = document.getElementById( "protected-by-you" );
protectedByYouPlaceholder.textContent = numberOfProtectedPeople;

let personQuantifier;
function definePersonQuantifier( numberOfPeople ) {
  if( numberOfPeople === 1 ) {
    personQuantifier = 'person'
  } else {
    personQuantifier = 'people'
  };
  return personQuantifier;
}
definePersonQuantifier( numberOfProtectedPeople );
let personQuantifierPlaceholder = document.getElementById( "person-quantifier" );
personQuantifierPlaceholder.textContent = personQuantifier;

// To display next payment
let nextPaymentTotal = 3572;
let mainNextPaymentPlaceholder = document.getElementById( "next-payment-amount" );
mainNextPaymentPlaceholder.textContent = nextPaymentTotal;