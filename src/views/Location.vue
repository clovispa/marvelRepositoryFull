<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col">
          <p>
          <strong>dado los siguientes Json :</strong>
          </p>
          <h2>Json número 1</h2>
          <p>
            {{exampleOne}}
          </p>
          <h2>Json número 2</h2>
          <br>
          <p>
            {{exampleTwo}}
          </p>
          <p>
           <strong>Se debe generar un script que con estas entradas genere el siguiente resultado:
            Los servicios para cada localidad con mayor limite:</strong>
          </p>
          <p>
            {{results}}
          </p>
          <p>
            <strong> Debe además identificar:

            La localidad con mayor cantidad de servicios disponibles
            El servicio con mayor cobertura (Usado en más localidades)
            El script debe estar escrito en javascript (puedes usar librerías/frameworks que te ayuden con la manipulación de los json), el entregable puede ser un script por terminal o una web simple.
            </strong>
          </p>
        </div>
        <div class="col">
          <p>Pegar Json numero 1 aqui</p>
          <textarea  v-model="textOne" class="form-control"  rows="3"></textarea>
          <br>
          <p>Pegar Json numero 2 aqui</p>
          <textarea  v-model="textTwo" class="form-control"  rows="3"></textarea>
          <br>
          <button type="button" class="btn btn-dark" @click="calculate">Calcular</button>
        </div>
        <div class="col">
          {{ result }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LocationComponent",
  data() {
    return {
      exampleOne :  {
        1: {
          carrier: "CCH",
          service: "DEX",
        },
        2: {
          carrier: "CCH",
          service: "express",
        },
        3: {
          carrier: "CCH",
          service: "priority",
        },
        15: {
          carrier: "CHP",
          service: "nextday",
        },
        16: {
          carrier: "CHP",
          service: "sameday",
        },
        17: {
          carrier: "CHP",
          service: "express",
        }
      },
      exampleTwo : {
        data: {
          BUIN: [
            {
              limit: 1,
              over_carrier_service_id: 17,
              under_carrier_service_id: 17
            },
            {
              limit: 2,
              over_carrier_service_id: 15,
              under_carrier_service_id: 15
            }
          ],
          LAJA: [
            {
              limit: 2,
              over_carrier_service_id: 1,
              under_carrier_service_id: 1
            },{
              limit: 5,
              over_carrier_service_id: 2,
              under_carrier_service_id: 2
            },{
              limit: 1,
              over_carrier_service_id: 17,
              under_carrier_service_id: 17
            }
          ],

          LEBU: [
            {
              limit: 2,
              over_carrier_service_id: 1,
              under_carrier_service_id: 1
            },{
              limit: 6,
              over_carrier_service_id: 3,
              under_carrier_service_id: 3
            },{
              limit: 5,
              over_carrier_service_id: 2,
              under_carrier_service_id: 2
            },{
              limit: 4,
              over_carrier_service_id: 16,
              under_carrier_service_id: 16
            }
          ],

          LOTA: [
            {
              limit: 2,
              over_carrier_service_id: 15,
              under_carrier_service_id: 15
            },{
              limit: 4,
              over_carrier_service_id: 16,
              under_carrier_service_id: 16
            },{
              limit: 1,
              over_carrier_service_id: 17,
              under_carrier_service_id: 17
            }
          ]
        }
      },
      results : {
        BUIN: {
          limit: 2,
          over: {
            carrier: "CHP",
            service: "nextday",
          },
          under: {
            carrier: "CHP",
            service: "nextday",
          }
        },
        LAJA: {
          limit: 5,
          over: {
            carrier: "CCH",
            service: "express",
          },
          under: {
            carrier: "CCH",
            service: "express",
          }
        },
        LEBU: {
          limit: 6,
          over: {
            carrier: "CCH",
            service: "priority",
          },
          under: {
            carrier: "CCH",
            service: "priority",
          }
        },
        LOTA: {
          limit: 4,
          over: {
            carrier: "CHP",
            service: "sameday",
          },
          under: {
            carrier: "CHP",
            service: "sameday",
          }
        }
      },
      result: {},
      json : '',
      values: '',
      textOne: '',
      textTwo:''
    }
  },
  methods: {
    calculate() {
      this.values =  JSON.parse(this.textOne)
      this.json =  JSON.parse(this.textTwo)

      Object.keys(this.json.data).forEach((location) => {
        const maxLimit = this.json.data[location]
            .map((c) => c.limit)
            .reduce((prev, curr ) => (prev < curr  ? curr  : prev));
        const { over_carrier_service_id, under_carrier_service_id } = this.json.data[
            location
            ].find((c) => c.limit === maxLimit);
        this.result = {
          ...this.result,
          [location]: {
            limit: maxLimit,
            over: {
              carrier: this.values[over_carrier_service_id].carrier,
              service: this.values[over_carrier_service_id].service,
            },
            under: {
              carrie: this.values[under_carrier_service_id].carrier,
              service: this.values[under_carrier_service_id].service,
            },
          },
        };
      });

    }
  }
}
</script>

<style scoped>

</style>
