import { Movie, MovieId, PageNumber } from '../movie'
import React = require('react')

type ClickMovie = (id: MovieId) => void

type BrowerMovie = (page: PageNumber) => void

type FilterMovie = (searchTerm: string) => void
