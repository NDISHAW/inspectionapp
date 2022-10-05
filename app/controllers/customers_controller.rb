class CustomersController < ApplicationController
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  def create
    customer=Customer.create(customer_params)
        if customer.valid? 
            session[:customer_id] = customer.id
            render json: customer, status: :created
        else
            render json: {errors: customer.errors.full_messages}, status: :unprocessable_entity
        end    
  end
  def show
    customer = Customer.find_by(id: session[:customer_id])
    if customer
      render json: customer, only: [:email, :names]
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end    

  def index
    customers = Customer.all
    render json: customers
  end
  private 
  def customer_params
    params.permit(:names, :email, :phone_no,:address,:licence_no)
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end  
end
