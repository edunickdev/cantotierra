import { createClient } from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'https://canto-de-la-tierra.cdn.prismic.io/api/v2'


export const client = createClient(repositoryName, {

  // If your repository is private, add an access token
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImNhbnRvLWRlLWxhLXRpZXJyYS1kODA2NGZhYi00OGYzLTRkOTAtYTUyMS0yZjAxNWRjYzI5ZWJfNCIsImRhdGUiOjE3MDk5MjQ4NjcsImRvbWFpbiI6ImNhbnRvLWRlLWxhLXRpZXJyYSIsImFwcE5hbWUiOiJjYW50by1wb3ItbGEtdGllcnJhIiwiaWF0IjoxNzA5OTI0ODY3fQ.B5UA0KWNPcnW4s5IkH6iZo8L38CMTbk7MPAxWJ0peJM',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'destacados',
      path: '/inicio',
    },
  ],
})