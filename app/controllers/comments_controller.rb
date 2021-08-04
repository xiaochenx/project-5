class CommentsController < ApplicationController
    def index
        listing = Listing.find_by(id: params[:listing_id])
        comments = listing.comments
        render json: comments
    end

    def create
        comment = Comment.create(comment_params)
        if comment.valid?
             render json: comment, status: :created
        else
            render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end  
    end

    private

    def comment_params
        params.permit(:listing_id,:content)
    end
end
