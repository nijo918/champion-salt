import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import ProductsPage from '../app/products/page'
import ContactPage from '../app/contact/page'
import ServicesPage from '../app/services/page'

describe('Champion Salt site smoke tests', () => {

  it('renders home page', () => {
    render(<Home />)
    expect(screen.getByText(/Welcome to Champion Salt!/i)).toBeInTheDocument()
  })




  it('renders products page heading', () => {
    render(<ProductsPage />)
    expect(
      screen.getByRole('heading', { name: /Premium Salt for Every Need/i })
    ).toBeInTheDocument()
  })

  it('renders services page heading', () => {
    render(<ServicesPage />)
    expect(screen.getByRole('heading', { name: /Industrial & Export Solutions/i })).toBeInTheDocument()
  })

  it('renders contact page heading', () => {
    render(<ContactPage />)
    expect(screen.getByRole('heading', { name: /Champion Salt Supply/i })).toBeInTheDocument()
  })

})

