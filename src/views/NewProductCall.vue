<template>
  <div class="NewProductCall">
    <h1>My Buyer’s Homepage</h1>
    <p>This is the main page to view products for sale and any oustanding actions</p>

    <ao-card :title="'Browse By Category'">
    	<p>stuff here....</p>
    </ao-card>


    <ao-card :title="'My Buyers Workspace'">
    	<p>stuff here....</p>
    </ao-card>


    <ao-button @click.native="toggleModal">Open Modal</ao-button>

    <ao-modal
        v-if="showModal"
        :header-text="'I am the modal title'"
        @modalClose="toggleModal">
        <ao-input
          slot="modal-toolbar"
          :show-label="false"/>
        <div slot="modal-body">
          <p>I am content</p>
        </div>
        <div slot="modal-footer">
          <ao-button
            primary
            @click.native="continueModal">
            Continue
          </ao-button>
        </div>
      </ao-modal>

  </div>
</template>

<script>
export default {
  name: 'NewProductCall',
  data () {
    return {
      showModal: false,
    }
  },
  methods: {
  	toggleModal () {
  	  console.log('click!!');
      this.showModal = !this.showModal
      return this.showModal
    },
    continueModal () {
      this.toggleModal()
    }
  }
}
</script>



