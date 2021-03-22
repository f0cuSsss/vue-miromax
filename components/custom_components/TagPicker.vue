<template>
  <div class="fc-tags-picker">
    
    <input
      class="fc-tags-picker-text"
      placeholder="Add tag..."
      v-model="input"
      @keydown.backspace="handleBackspace"
      @keydown.enter.prevent="addTag"
    />
    
    <div class="fc-tags-picker-tags">
        <span 
            class="fc-tags-picker-tag"
            v-for="tag in tags" 
            :key="tag" 
        >
        <span>{{ tag }}</span>
        <button 
            type="button" 
            class="fc-tags-picker-remove" 
            @click="confirmRemoveTag(tag)"
        >&times;</button>
        </span>
    </div>

    <Dialog name="deletetag" @deleteDialogResult="(s) => removeConfirm = s">
        <template #body>
            Are you sure you want to delete <b>{{ tagToRemove }}</b> tag ?
        </template>
    </Dialog>

  </div>
</template>

<script>
import Dialog from '@/components/custom_components/Dialog'

export default {
  model: {
    prop: "tags",
    event: "update"
  },
  components: { Dialog },
  props: ["tags"],
  data() {
    return {
      input: "",
      removeConfirm: null,
      tagToRemove: null
    }
  },
  computed: {
    newTag() {
      console.log(this.$el);
      return this.input.trim()
    }
  },
  watch: {
    removeConfirm() {
      if(this.removeConfirm === null) return;

      if(this.removeConfirm) {
        this.$emit(
          "update",
          this.tags.filter((t) => t !== this.tagToRemove)
        );

        this.$toast.show('removeTag', 2500, true, `Tag ${this.tagToRemove} deleted successful`);
        // this.$toast.show('removeTag', 2500, true, `Tag <b>${this.tagToRemove}</b> deleted successful`);
        this.removeConfirm = null;
        this.tagToRemove = null;
      }
      
    },
  },
  methods: {
    confirmRemoveTag(tag) {
      this.tagToRemove = tag;
      this.$dialog.ask('deletetag', tag);
    },
    addTag() {
      if (this.newTag.length === 0 
            || this.tags.includes(this.newTag)
            || this.newTag.length > 15) {
        return
      }
      this.$emit("update", [...this.tags, this.newTag])
      this.clearInput()
    },
    clearInput() {
      this.input = ""
    },
    handleBackspace(e) {
      if (this.newTag.length === 0) {
        this.$emit("update", this.tags.slice(0, -1))
      }
    }
  }
}
</script>

<style lang="scss" scope>
    .fc-tags-picker {
        background-color: #fff;
        border-width: 1px;
        border-radius: 10px;
        border: 1px solid #eee;
        box-shadow: 1px 1px 0px 1px #eee;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 0.5rem 0 0.25rem 0.5rem;
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        max-width: 300px;
        margin: 0;
        overflow: hidden;

        &-tags {
            display: flex;
            flex-wrap: wrap;
            margin-top: 10px;
            align-items: center;
        }

        &-tag {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            line-height: 1;
            max-width: 80%;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            font-size: 0.875rem;
            background-color: #bcdefa;
            color: #1c3d5a;
            border-radius: 0.25rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            padding: 0.35rem;
            margin-right: 0.5rem;
            margin-bottom: 0.25rem;

            &:focus-within {
                -webkit-box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
                box-shadow: 0 0 0 2px rgba(52, 144, 220, 0.5);
            }
        }

        &-remove {
            color: #2779bd;
            cursor: pointer;
            font-size: 1.125rem;
            line-height: 1;

            &:first-child {
                margin-right: 0.25rem;
            }
            &:last-child {
                margin-left: 0.25rem;
            }
            &:focus {
                outline: 0;
            }
        }

        &-text {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            outline: 0;
            padding-top: 0.25rem;
            padding-right: 0.5rem;
            border: none;
            background-color: transparent;
            // min-width: 5rem;
        }

    }
    
</style>