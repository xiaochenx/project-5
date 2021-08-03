class ListingsController < ApplicationController
    before_action :authorized, :current_user
    before_action :set_listing, only: [:show, :update, :destroy]
    before_action :listing_found?, only: [:show, :update, :destroy]

    skip_before_action :authorized, only: [:indexAll]

    def indexAll
        listings = Listing.all
        render json: listings, include: :comments
    end


    def index
        
        listings = @user.listings
        render json: listings
    end


    def create
        
        listing = @user.listings.create(listing_params)
        if listing.valid?
            render json: listing, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: @listing           
    end

    def update
        @listing.update(listing_params)
        render json: @listing     
    end

    def destroy
        @listing.destroy
        head :no_content      
    end

    private

    def set_listing
        @listing = @user.listings.find_by(id: params[:id])
    end

    def listing_found?
        render json: { error: "Not Found"}, status: :not_found unless @listing
    end

    def listing_params
        params.permit(:name, :description, :price)
    end

    def authorized
        return render json: {error: "unauthorized" }, status: :unauthorized unless session.include? :user_id
    end
end
