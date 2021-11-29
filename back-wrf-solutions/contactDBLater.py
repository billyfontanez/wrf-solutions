class Contact_Form(db.Model):
    contact_form_id = db.Column(db.Integer, primary_key=True)
    contact_form_name = db.Column(db.String, unique=False, nullable=False)
    contact_form_email = db.Column(db.String, unique=False, nullable=False)
    contact_form_message = db.Column(db.String, unique=False, nullable=False)

    def __init__(self, contact_form_name, contact_form_email, contact_form_message):
        self.contact_form_name = contact_form_name
        self.contact_form_email = contact_form_email
        self.contact_form_message = contact_form_message

class Contact_FormSchema(ma.Schema):
    class Meta:
        fields = ('contact_form_name', 'contact_form_email', 'contact_form_message')

contact_form_schema = Contact_FormSchema()
multiple_contact_form_schema = Contact_FormSchema(many=True)

@app.route('/contact-form/add', methods=['POST'])
def add_contact_form():
    if request.content_type != 'application/json':
        return jsonify('Error: Data must be JSON')

    post_data = request.get_json()
    contact_form_name = post_data.get('contact_form_name')
    contact_form_email = post_data.get('contact_form_email')
    contact_form_message = post_data.get('contact_form_message')


    new_contact_form = Contact_Form(contact_form_name, contact_form_email, contact_form_message)

    db.session.add(new_contact_form)
    db.session.commit()

    return jsonify("Contact form has been added")

@app.route('/contact-form/get', methods=['GET'])
def get_contact_form():
    contact_form = db.session.query(Contact_Form).all()
    return jsonify(multiple_contact_form_schema.dump(contact_form))