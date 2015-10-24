class SpewsController < ApplicationController
  def index
    @spews = Spew.all.order(created_at: :desc)
    render json: @spews
  end
end
