# spaCy #

spaCy is an open-source Python library used for NLP tasks.

This brief doc will cover:
* Installation and Setup
* How to use spaCy
    * Loading the Model
    * Doc Objects
    * Sentence Detection
    * Tokenization
    * Part of Speech Tagging
    * Named Entity Recognition

## Installation and Setup ##

Run the following commands in the shell:
```
# Create a new virtual environment in the current directory
python3 -m venv your_env_name

# Activate the environment
source ./your_env_name/bin/activate

# Install library
pip install spacy

# Install the default English language model
python -m spacy download en_core_web_sm
```

## How to use spaCy ##

### Loading the Model ###

Before doing anything, you'll need to load the English model at the top of your Python file.

```python
import spacy
nlp = spacy.load('en_core_web_sm')
```

### Doc Objects ###

Any text that is to be processed by spaCy should be turned into a Doc object that is understood by spaCy's built in methods. 

```python
example_text = "This is an example."

# use the nlp() function to create the Doc
example_doc = nlp(example_text)

# see how the Doc can now be separated into tokens
print [token.text for token in example_doc]
```

If you're taking the input text from a text file rather than a string variable, you'll need to open and read the file.

```python
example_file_text = open('example.txt').read()
example_file_doc = nlp(example_file_text)
```

### Sentence Detection ###

It can be useful to break text down into separate sentences before doing any further analysis. Assuming you've already created a Doc object you can get a list of the sentences like this:

```python
sentences = list(example_doc.sents)
```

You can also customize what character spaCy uses to delimit sentences. See the referenced [guide](https://realpython.com/natural-language-processing-spacy-python/#:~:text=You%20can%20also%20customize%20the%20sentence%20detection%20to%20detect%20sentences%20on%20custom%20delimiters.) by Real Python for this. 

### Tokenization ###

Tokens are the basic units that make up a text. Tokens are iterable within a Doc object. For example:

```python
for token in example_doc:
    print(token)
```

Tokens have many attributes that carry information about them. Here are a few.

```python
token.idx # the index of the first character of the token within the Doc
token.is_punct # a boolean value representing whether the token is a punctuation character
token.is_space # a boolean value representing whether the token is a space character
```

The tokenization process can be customized in detail. See the referenced [guide](https://realpython.com/natural-language-processing-spacy-python/#:~:text=You%20can%20also%20customize%20the%20tokenization%20process%20to%20detect%20tokens%20on%20custom%20characters.) by Real Python for this.

### Part of Speech Tagging ###

Once a text has been tokenized, its tokens can be assigned to one of the basic parts of speech, such as noun, adjective, or verb. POS tagging is easy in spaCy because the POS information is contained in two attributes within every token.

The 'tag_' attribute holds the fine-grained part of speech, meaning it gives a very specific classification of how the token is used. The 'pos_' attribute holds the coarse-grained part of speech, meaning it gives a more general classification of the token. For example, the token "His" might have a 'tag_' attribute of PRP$, meaning it is a possessive pronoun, and have a 'pos_' attribute of ADJ, meaning it is an adjective.

```python
token.tag_ # the fine-grained part of speech
token.pos_ # the coarse-grained part of speech
```

If you wanted to pull all the nouns out of a Doc, or sentence:

```python
nouns = []
for token in example_doc:
    if token.pos_ == 'NOUN':
        nouns.append(token)
```

### Named Entity Recognition ###

Named entity recognition allows you to identify entities in text and classify them into predefined categories such as people, places, companies, etc. NER can be used to pull certain types of entities from a text. For example, you could extract all mentions of people from a text by looking for entities with the 'PERSON' tag. 

Entities can be accessed through the 'ents' attribute of a Doc object.

```python
for ent in example_doc.ents:
    print(
        ent.text, # the token text
        ent.start_char, # the character index of the beginning of the token
        ent.end_char, # the character index of the end of the token
        ent.label_, # the classification of the entity chosen by the model
        spacy.explain(ent.label_) # describes the 'label_' tag in more detail
    )
```

spaCy has some built-in entity labels, but if you want to create your own labels, you can do so by using a custom model and specifying your own list of entities. You must also provide your own training data so the model can recognize these entities in text. This is detailed further in the [guide](https://sematext.com/blog/entity-extraction-with-spacy/#:~:text=our%20own%20model.-,Training%20a%20new%20model,-To%20train%20a) from Sematext.

### Noun Chunks ###

In spaCy, a doc is automatically divided into noun phrases, or noun chunks. These segments of the text contain nouns plus their accompanying words and descriptors. For example, if the doc contained "The tall man ate a sandwich", the noun chunks would be "tall man" and "sandwich". 

Noun chunks are an attribute of any Doc object. 

```python
for chunk in example_doc.noun_chunks:
    print(chunk)
```

### Resources ###

* [Real Python: Natural Language Processing With spaCy in Python](https://realpython.com/natural-language-processing-spacy-python/#what-are-nlp-and-spacy)
* [Sematext: Enity Extraction with spaCy](https://sematext.com/blog/entity-extraction-with-spacy/)

