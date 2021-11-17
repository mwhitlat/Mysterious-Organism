// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, dna) {
  return {
    specimenNum : num,
    dna,
    mutate() {
    randIndex = Math.floor(math.random()*this.dna.length)
    let newRandBase = returnRandBase()
    while (this.dna[randIndex] === newRandBase) {
      newRandBase === returnRandBase()
    }
    this.dna[randIndex] = newRandBase
    return this.dna
    },
    compareDNA(obj) {
      var matches = 0
      for (let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === obj.dna[i]) {
          matches++
        }
      } 
      console.log(matches)
      let similarity = (matches / this.dna.length)*100
      let roundedSimilarity = similarity.toFixed(2)
      console.log(`${this.specimenNum} & ${obj.specimenNum} have ${roundedSimilarity}% DNA in common`)
    },
    willLikelySurvive () {
      const cOrG = this.dna.filter(el => el === 'C' || el === 'G');
      return cOrG.length / this.dna.length >= 0.6;
    }
  }
}

let surviveIDs = []
let id = 1
while (surviveIDs.length < 30) {
  let testOrg = pAequorFactory(id,mockUpStrand())
  if(testOrg.willLikelySurvive()) {
    surviveIDs.push(testOrg)
  }
}


console.log(surviveIDs)
