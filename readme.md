Welcome to the Dollhouse app! Here a user can create a dollhouse consisting of a background image, dolls, and doll accessories positioned relative to each other. The user can also upload images to be used in each of these categories.

INSTALLATION:

- Running the app requires Python, Django(==1.10.3), Pillow(==3.4.2), and wheel(==0.24.0).

- Clone or download the application from github.

- Run the migrations:
In the base directory, enter "python manage.py makemigrations".
In the same directory, enter "python manage.py migrate".

- Load data from fixtures:
Again in the base directory, enter "python manage.py loaddata fsd.json".

- Run the server using "python manage.py runserver".

- In a browser, navigate to the server location (default: 127.0.0.1:8000), which should bring up the lobby page.

DOLLHOUSE WALKTHROUGH:

From the lobby page you can navigate to existing dollhouses, create a new dollhouse or proceed to the loading dock, where user images can be uploaded. 

Try to create a new dollhouse. You will be prompted for a name and the page will reload. Navigate to the dollhouse you just created.

In the dollhouse page, you can rename or delete the dollhouse or change the background. You can also return to the lobby or go to the dressing room for this dollhouse. Let's add some dolls to this dollhouse - proceed to the dressing room.

The dressing room allows us to create dolls and accessories, and position accessories relative to their doll. To create a doll, choose from the dropdown "preview doll" menu. When you've made a selection, click on "create new doll" at the bottom of the Doll Preview pane. You'll be prompted for a name, and then the page will reload.

Accessories are owned by dolls, and so accessory instances need to be created for each doll. Select the doll using the "select a working doll" menu. Then, create a new accessory using the "preview accessory" and "create accessory" features in the right sidebar. Again, the page will reload. Select the doll again and the accessory will load. It can be clicked and dragged, and its position relative to the doll will be stored when you release the mouse. If you drag the accessory over the trash can and release, it initiates the process to delete the accessory.

Return to the dollhouse. Any dolls you've created should load, with attached accessories. The doll/accessory pairs can now be clicked and dragged, and their position will be saved when the mouse is released. Similarly, dragging and releasing the mouse over the trash can will start the process to delete the doll.

Return to the lobby, and then navigate to the loading dock. Here we can upload new backgrounds, and new doll and accessory preview images. Enter a name and choose a file, then click the upload button. Dolls and Accessories will be saved as doll preview images and accessory preview images. You can create dolls and accessories tied to an existing dollhouse in the dressing room using these images. New backgrounds will be added to the "change background" select menu for any active dollhouse.
