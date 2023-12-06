<template>
  <div>
    <h1>Datos desde datos.txt</h1>
    <div v-if="datos.length > 0">
      <table>
        <thead>
          <tr>
            <th>Índice</th>
            <th>Nombre</th>
            <th>Valor 1</th>
            <th>Valor 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in datos" :key="index">
            <td>{{ item.index }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.valor1 }}</td>
            <td>{{ item.valor2 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No hay datos disponibles</p>
    </div>
  </div>
</template>

<script>

import { onMounted, ref } from 'vue';
import db from '~/plugins/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default {
  data() {
    return {
      datos: [],
    };
  },
  created() {
    const contenidoTxt = `1# Oscar Peterus# 0.06514889371350763# 2421
    2# Samantha Abdul# 0.019436026012478645# 2062
    3# Isabel Rafaello# 0.001223379175243492# 3024
    4# Ravi Virgilio# 18.82310970918459# 7864
    5# Alyssa Abey# 0.000024413942043421475# 3285
    6# Mia Abelard# 0.001223379175243492# 1444
    7# Addison Abe# 0.0015650798041808443# 6032
    8# Sophia Abbot# 1.279247780500762# 9335
    9# Olivia Abbie# 0.987360007872984# 7084
    10# Washington Wang# 18.82310970918459# 8210
    11# Welby Ward# 0.16438024892518174# 7927
    12# Elizabeth Abby# 0.06514889371350763# 9291
    13# Abigail Abbott# 0.16438024892518174# 9203
    14# Emma Aaron# 64.16474015582006# 2459
    15# Luis Abeu# 64.16474015582006# 1813
    16# Maximilianus Abba# 12.001495245658143# 2288
    17# Jaime Aguie# 18.82310970918459# 5165
    18# Isabella Ab# 18.82310970918459# 1680
    19# Emily Abba# 12.001495245658143# 1413
    20# Pablo Duran# 64.16474015582006# 1037`;

    const lines = contenidoTxt.split('\n');
    const parsedData = lines.map(line => {
      const [index, nombre, valor1, valor2] = line.split('#').filter(Boolean);
      return { index, nombre, valor1, valor2 };
    });
    this.datos = parsedData;
  },
};
</script>

<style>
/* Estilos CSS opcionales */
@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
body {
  max-width: 40%;
  font-family: 'Kanit', sans-serif;
  margin: 20px;
}
h1 {
  text-align: center;
} 
table {
  background-color: silver;
  border-collapse: collapse;
  width: 200%;
  color: black;
}
th {
  background-color: gray;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  border-color: black;
  border-width: 5px;
}
</style>