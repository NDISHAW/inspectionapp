class CustomersController < ApplicationController
  def show
    customer = Customer.find_by(id: session[:customer_id])
    if customer
      render json: customer, only: [:email, :names]
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end    
end
