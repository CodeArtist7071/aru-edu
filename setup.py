from setuptools import setup, find_packages

setup(
    name="arumind-pipeline",
    version="0.1",
    packages=find_packages(),
    install_requires=[
        "google-cloud-vision",
        "pymupdf",
        "supabase",
        "python-dotenv"
    ],
)
