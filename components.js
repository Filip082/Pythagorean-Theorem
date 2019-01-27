Vue.component('input-item', {
    template: `<div class="form-group">
                <label for="formGroupExampleInput">
                  {{ iteminput.text + " " + iteminput.name }}
                </label>
                <input type="number" min="1" class="form-control border-primary" :value="iteminput.value" v-on:input="onInput">
              </div>`,
    props: ['iteminput', 'value'],
    methods: {
      onInput: function(event) {
        this.$emit('input', event.target.value);
      }
    }
});

Vue.component('data-reader', {
    template: `<div class="card border-primary mb-3">
                <div class="card-header">{{ info.title }}</div>
                <div class="card-body text-primary">
                    <p>
                    {{ info.text }}
                    </p>
                    <input-item v-for="itemInput in iteminputlist" v-on:input="sendDraw" v-model="iteminputlist[itemInput.id].value" :key="itemInput.id" :iteminput="itemInput"></input-item>
                </div>
                </div>`,
    props: ['info', 'iteminputlist'],
    methods: {
        sendDraw: function() {
        this.$emit('senddraw');
        }
    }
});

Vue.component('info-item', {
    template: `<span>
                {{ iteminfo.text }} <span class="font-weight-bold">{{ iteminfo.name }} = {{ iteminfo.value }}</span><br> 
              </span>`,
    props: ['iteminfo']
});

Vue.component('info-writer', {
    template: `<div class="card border-primary mb-3">
                <div class="card-header">{{ info.title }}</div>
                <div class="card-body text-primary">
                    <p>
                    <info-item v-for="itemInfo in iteminfolist" :key="itemInfo.id" :iteminfo="itemInfo"></info-item>
                    <info-item :iteminfo="result"></info-item>
                    </p>
                    <div v-if="usecanvas">
                        <hr>
                        <canvas id="canvas" width="240" height="240" ></canvas>
                    </div>
                </div>
                </div>`,
    props: ['info', 'iteminfolist', 'result', 'usecanvas']
});

Vue.component('app', {
    template: `<div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">{{ title }}</h1>
                    <p class="lead text-primary">
                    {{ description }}
                    </p>
                    <hr class="my-4">
                    <div class="row">
                    <div class="col-sm-6">
                        <data-reader v-on:senddraw="sendDraw" :info="datareader" :iteminputlist="entereddata"></data-reader>
                    </div>
                    <div class="col-sm-6">
                        <info-writer :iteminfolist="entereddata" :info="infowriter" :result="result" :usecanvas="usecanvas"></info-writer>
                    </div>
                    </div>
                </div>
                </div>`,
    props: ['title', 'description', 'infowriter', 'datareader', 'entereddata', 'result', 'usecanvas'],
    methods: {
        sendDraw: function() {
            this.$emit('draw');
        }
    }
});