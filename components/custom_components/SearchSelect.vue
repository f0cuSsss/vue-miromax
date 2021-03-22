<template>
  <on-click-outside :do="close">
    <div class="search-select" :class="{ 'is-active': isOpen }">
      <button ref="button" @click="open" type="button" class="search-select-input">
        <span v-if="value !== null">{{ value }}</span>
        <span v-else class="search-select-placeholder">Select a band...</span>
      </button>
      <div v-show="isOpen" class="search-select-dropdown">
        <input class="search-select-search"
          v-model="search"
          ref="search"
          @keydown.esc="close"
          @keydown.up="highlightPrev"
          @keydown.down="highlightNext"
          @keydown.enter.prevent="selectHighlighted"
          @keydown.tab.prevent
        >
        <ul ref="options" v-show="filteredOptions.length > 0" class="search-select-options">
          <li class="search-select-option"
            v-for="(option, i) in filteredOptions"
            :key="option"
            @click="select(option)"
            :class="{ 'is-active': i === highlightedIndex}"
          >{{ option }}</li>
        </ul>
        <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found for "{{ search }}"</div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "./OnClickOutside.vue"

export default {
  components: {
    OnClickOutside
  },
  props: ["value", "options", "filterFunction"],
  data() {
    return {
      isOpen: false,
      search: "",
      highlightedIndex: 0
    }
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options)
    }
  },
  methods: {
    open() {
      if (this.isOpen) {
        return
      }
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.search.focus()
        this.scrollToHighlighted()
      })
    },
    close() {
      if (!this.isOpen) {
        return
      }
      this.isOpen = false
      this.$refs.button.focus()
    },
    select(option) {
      this.$emit("input", option)
      this.search = ""
      this.highlightedIndex = 0
      this.close()
    },
    selectHighlighted() {
      this.select(this.filteredOptions[this.highlightedIndex])
    },
    scrollToHighlighted() {
    //   this.$refs.options.children[this.highlightedIndex].scrollIntoView({
    //     block: "nearest"
    //   })
    },
    highlight(index) {
      this.highlightedIndex = index

      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1
      }

      if (this.highlightedIndex > this.filteredOptions.length - 1) {
        this.highlightedIndex = 0
      }

      this.scrollToHighlighted()
    },
    highlightPrev() {
      this.highlight(this.highlightedIndex - 1)
    },
    highlightNext() {
      this.highlight(this.highlightedIndex + 1)
    }
  }
}
</script>



<style lang="scss" scoped>
    .search-select {
        position: relative;

        &-input {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            text-align: left;
            display: block;
            width: 100%;
            border-width: 1px;
            padding: 0.5rem 0.75rem;
            background-color: #fff;
            border-radius: 0.25rem;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:focus {
                outline: 0;
                -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
                box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
            }
        }

        &-placeholder {
            color: #8795a1;
        }

        &.is-active &-input {
            -webkit-box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
            box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
        }

        &-dropdown {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
            position: absolute;
            right: 0;
            left: 0;
            background-color: #3d4852;
            padding: 0.5rem;
            border-radius: 0.25rem;
            -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
            z-index: 50;


        }

        &-search {
            background-color: #606f7b;
            border-width: 1px;
            border-radius: 0.25rem;   
            color: #22292f;
            display: block;
            margin-bottom: 0.5rem;
            padding: 0.5rem 1rem;
            width: 100%;
            color: #fff;
            margin: 0;
            margin-bottom: 5px;
            font-size: 100%;
            line-height: 1.15;

            &:focus {
                outline: 0;
            }
        }

        &-options {
            list-style: none;
            padding: 0;
            padding-right: 5px;
            position: relative;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            max-height: 14rem;


            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
                border-radius: 10px;
            }

            &::-webkit-scrollbar {
                width: 10px;
                margin: 0 3px;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 10px;
                background-color: #445b6b;
            }


        }

        &-option {
            padding: 0.5rem 0.75rem;
            color: #fff;
            cursor: pointer;
            border-radius: 0.25rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:hover {
                background-color: #606f7b;
            }

            &.is-active,
            &.is-active:hover {
                background-color: #3490dc;
            }
        }

        &-empty {
            padding: 0.5rem 0.75rem;
            color: #b8c2cc;
        }

    }
  
</style>