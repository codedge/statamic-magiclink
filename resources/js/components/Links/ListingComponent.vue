<template>
    <data-list :columns="columns" :sort="false" :rows="rows">
        <div class="card p-0" slot-scope="{ filteredRows: rows }">
            <data-list-table :rows="rows">
                <template slot="cell-id" slot-scope="{ row: collection }">
                    <a :href="collection.show_url">{{ collection.id }}</a>
                </template>
            </data-list-table>
        </div>
    </data-list>
</template>

<script>
    export default {
        props: [
            'initial-rows',
            'columns',
        ],
        data() {
            return {
                rows: this.initialRows
            }
        }
    }
</script>
