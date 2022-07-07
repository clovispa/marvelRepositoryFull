<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos.

          En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.

          Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.

          El entregable puede ser un script que se pueda ejecutar por terminal o una web simple sin diseño.
        </div>
        <div class="col">
          <input v-model="numOne" type="email" class="form-control"  placeholder="Ingrese nombre">
          <br>
          <input v-model="numTwo"  type="email" class="form-control"  placeholder="Ingrese nombre">
          <br>
          <button type="button" class="btn btn-dark" @click="calculate">Calcular</button>
        </div>
        <div class="col">
          {{ result }}
        </div>
        <div v-if="!result.length" class="col">
          {{ msn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
 data() {
    return {
      numOne: '',
      numTwo: '',
     result: '',
      msn: ''
    }
 },
  computed: {

  },
  methods: {
    calculate() {
      this.result = this.findPrimeNumbers(this.numOne, this.numTwo)
    },
     onDetermineRange(firstValue, secondValue) {
      let range = [];
      if (firstValue > secondValue) {
        this.msn = `El primer numero : ${firstValue}, es mayor que el segundo:${secondValue}`;
        return range;
      }

      for (let i = firstValue; i <= secondValue; i++) {
        range.push(i)
      }

      return range
    },

     isPrimeNumber  (number) {
      if (number == 0) return false
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false
        }
      }
      return number !== 1
    },

     getPrimeNumberListFromRange(arrayData = []) {
      let primeNumberArray = []
      if (arrayData.length === 0) {
        return arrayData
      }

      arrayData.forEach(number => {
        if (this.isPrimeNumber(number)) primeNumberArray.push(number)
      })

      return primeNumberArray
    },

     findPrimeNumbers(firstValue, secondValue) {
      return this.getPrimeNumberListFromRange(this.onDetermineRange(firstValue, secondValue));
    }
  }
}
</script>
