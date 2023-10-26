pip install -r requirements.txt
pip3 install --upgrade pip
pip install --upgrade pip
cd frontend/
npm run build
cd ..
python3.9 manage.py collectstatic

