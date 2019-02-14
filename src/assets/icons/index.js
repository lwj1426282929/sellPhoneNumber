import Vue from 'vue'
import svgIcon from '@/components/svgIcon'

Vue.component('svg-icon', svgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
