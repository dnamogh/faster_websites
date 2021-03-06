!SLIDE full-page subsection
# Ruby on Rails Intro

<!SLIDE  full-page title-slide transition=scrollUp>
# Install Ruby on Rails

<!SLIDE full-page bullets incremental transition=scrollUp>
* Windows
 * <a href="http://railsinstaller.org" target="_blank">http://railsinstaller.org</a>

<!SLIDE full-page bullets incremental transition=scrollUp>
* Linux or Mac
  * <a href="http://www.blog.geekcampbaguio.com/2013-rails-install" target="_blank">http://www.blog.geekcampbaguio.com/2013-rails-install</a>

!SLIDE full-page commandline incremental
  // Make sure you have new Rails version installed
	$ gem install rails
	$ rails -v
	$ Rails 4.0.1

<!SLIDE full-page bullets incremental transition=scrollUp>
* Create a simple photo management app
  * Upload photos
  * Add a title and/or description

!SLIDE full-page commandline incremental
	$ rails new app
	$ cd app
	$ rails g scaffold photo title:string description:text
	$ rake db:migrate

<!SLIDE full-page title-slide transition=scrollUp>
	@@@ ruby
	# app/models/photo.rb

	class Photo < ActiveRecord::Base

	  validates :title, presence: true
	  validates :description, presence: true
	end

!SLIDE full-page commandline incremental
	$ rails s
	$ open http://localhost:3000/photos

<!SLIDE full-page center  transition=scrollUp>
![Photo validation](photo_validation.png)

!SLIDE full-page commandline incremental
	$ rails g migration add_picture_to_photo picture:string
	$ rake db:migrate

<!SLIDE full-page code transition=scrollUp>
	@@@ ruby
	# app/views/photos/_form.html.erb

	<div class="field">

	  <%= f.label :picture %>
	  <%= f.file_field :picture %>
	</div>

<!SLIDE full-page code title-slide transition=scrollUp>
	@@@ ruby
	# app/views/photos/show.html.erb

	<%= image_tag(@photo.picture_url) %>

<!SLIDE full-page code transition=scrollUp>
	@@@ ruby
	# app/controllers/photos_controller.rb

	  def photo_params
	    params.require(:photo).
      permit(:title, :description, :picture)
	  end

<!SLIDE full-page bullets incremental transition=scrollUp>
*  The Asset Pipeline
  * Allows easy management of static assets
  * Assets are precompiled for deployment

!SLIDE full-page commandline incremental
	$ rake assets:precompile RAILS_ENV=production

<!SLIDE full-page  bullets incremental transition=scrollUp>
* Assets are minified or compressed
  * <a href="http://yui.github.io/yuicompressor/" target="_blank">YUI compressor</a>
  * <a href="https://github.com/lautis/uglifier" target="_blank">uglifier</a>

<!SLIDE full-page bullets incremental transition=scrollUp>
* Performance Optimization for Ruby on Rails
  * Page Caching
  * Action Caching
  * Fragment Caching

<!SLIDE full-page bullets incremental transition=scrollUp>
* Resources
  * Web Performance Best Practices
    * <a href="https://developers.google.com/speed/docs/best-practices/rules_intro" target="_blank">https://developers.google.com/speed/docs/best-practices/rules_intro</a>
  * 14 Rules for faster-loading websites
    * <a href="http://stevesouders.com/hpws/rules.php" target="_blank">http://stevesouders.com/hpws/rules.php</a>
  * Ruby on Rails documentation
    * <a href="http://guides.rubyonrails.org" target="_blank">http://guides.rubyonrails.org</a>
  * Geekcamp Baguio Ruby on Rails Guide
    * <a href="http://rubyonrails.geekcampbaguio.com" target="_blank">http://rubyonrails.geekcampbaguio.com</a>
