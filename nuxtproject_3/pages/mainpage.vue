<template>
    <v-container>
        <v-col>   
            <v-card-text>
                <p>[업무진행현황]</p>
            </v-card-text>
            <v-simple-table>
                <template #default>
                <thead>
                    <tr>
                    <th>
                        분류
                    </th>
                    <th>
                        미결
                    </th>
                    <th>
                        중간상신
                    </th>
                    <th>
                        중결상신
                    </th>
                    <th>
                        검토
                    </th>
                    <th>
                        금일종결
                    </th>
                    <th>
                        금월종결
                    </th>
                    <th>
                        미입금건
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in desserts"
                    :key="item.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.not }}</td>
                    <td>{{ item.mid }}</td>
                    <td>{{ item.cor }}</td>
                    <td>{{ item.sus }}</td>
                    <td>{{ item.today_cor }}</td>
                    <td>{{ item.month_cor }}</td>
                    <td>{{ item.not_in }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-col>
        <v-row>
            <v-col>        
                <v-data-table>

                </v-data-table>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table>
            </v-col>
            <v-col>
                <v-card-text>
                    <p>sssssss</p>
                    <p>zzzzz</p>
                </v-card-text>
                <v-card-text>
                    <p>sssdddd</p>
                </v-card-text>         
                <v-card-text>
                    <p>ssssssaas</p>
                </v-card-text>          
                <!-- <v-data-table>

                </v-data-table>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table> -->
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card-text>
                    <p>sssssss</p>
                    <p>zzzzz</p>
                </v-card-text>
                <v-card-text>
                    <p>sssdddd</p>
                </v-card-text>         
                <v-card-text>
                    <p>ssssssaas</p>
                </v-card-text>          
                <!-- <v-data-table>

                </v-data-table>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table> -->
            </v-col>
            <v-col>
                <v-card-text>
                    <p>sssssss</p>
                    <p>zzzzz</p>
                </v-card-text>
                <v-card-text>
                    <p>sssdddd</p>
                </v-card-text>         
                <v-card-text>
                    <p>ssssssaas</p>
                </v-card-text>          
                <!-- <v-data-table>

                </v-data-table>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table> -->
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card-text>
                    <p>sssssss</p>
                    <p>zzzzz</p>
                </v-card-text>
                <v-card-text>
                    <p>sssdddd</p>
                </v-card-text>         
                <v-card-text>
                    <p>ssssssaas</p>
                </v-card-text>          
                <!-- <v-data-table>

                </v-data-table>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table> -->
            </v-col>
            <v-col>
                <v-card-text>
                    <p>sssssss</p>
                    <p>zzzzz</p>
                </v-card-text>
                <v-card-text>
                    <p>sssdddd</p>
                </v-card-text>         
                <v-card-text>
                    <p>ssssssaas</p>
                </v-card-text>          
                <!-- <v-data-table>

                </v-data-table>
                <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                ></v-data-table> -->
            </v-col>
        </v-row>
        
    </v-container>

</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: '분류',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '미결', value: 'not' },
          { text: '중간상신', value: 'mid' },
          { text: '종결상신', value: 'cor' },
          { text: '검토', value: 'sus' },
          { text: '금일종결', value: 'today_cor' },
          { text: '금월종결', value: 'month_cor' },
          { text: '미입금건', value: 'not_in' },
        ],
        desserts: [
            {
                name: '전체',
                not: '3576',
                mid: '-',
                cor: '5',
                sus: '-',
                today_cor: '35',
                month_cor: '228',
                not_in: '952',
            },
        ],
      }
    },
  }
</script>