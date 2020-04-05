import Person from '@material-ui/icons/Person'
import apiUrls from '../utils/apiUrls'
import { UpdateEntityUrlMethod } from '../utils/constants'

export default {
  name: "پروفایل کاربری",

  icon: Person,

  // You can provide api url to utils/apiUrl
  // or just copy string value here
  url: apiUrls.fake.user,

  // update entity url method, default is PATCH
  updateUrlMethod: UpdateEntityUrlMethod.PATCH,

  filtersUrl: apiUrls.fake.userFilters,

  // [optional] table pagination configuration
  pagination: { pageSize: 20, pageNumber: 1 },

  // [optional] table filters
  // you can pass filters options here
  // or provide filtersApiUrl to fetch them
  filters: [
    {
      name: 'type',
      value: ''
    }
  ],

  fields: [
    {
      name: 'name',
      type: 'string',
      rules: 'required'
    },
    {
      name: 'email',
      type: 'string',
      // specific rules to validate field
      rules: 'email|required'
    },
    {
      name: 'type',
      type: 'dropdown',
      rules: 'required',
      options: ['Client', 'Author']
    },
    {
      name: 'isManager',
      type: 'boolean',
      rules: 'required'
    }
  ]
}
