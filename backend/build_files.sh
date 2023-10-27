pip3 install --upgrade pip
pip install --upgrade pip
pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput --clear
echo "complete"

