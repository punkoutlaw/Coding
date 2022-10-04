<html>
<head>
    <link rel="stylesheet" href="scss/custom.css" type="text/css">
    <link rel="stylesheet" href="style.css" type="text/css">
<title>Mailing List Form</title>
</head>

<?php if (isset($message)) : ?>
    <div class="alert alert-success">
        <?= $message ?>
    </div>
    
<?php endif ?>

<div class="card-body">
    <form action="mailinglist.php" method="post">
        <br>
        <header>
            <h1>Mailing List</h1>
        </header>
    
        <div>
            <label for="name">Name</label>
            <br>
            <input type="text" value="<?= $inputs['name'] ?? '' ?>" name="name" id="name" placeholder="Full name">
            <small><?= $errors['name'] ?? '' ?></small>
        </div>
    
        <div>
            <label for="email">Email</label>
            <br>
            <input type="email" name="email" id="email" value="<?= $inputs['email'] ?? '' ?>" placeholder="Email address">
            <small><?= $errors['email'] ?? '' ?></small>
        </div>
    
        <div>
            <label for="subject">Subject</label>
            <br>
            <input type="subject" name="subject" id="subject" value="Mailing List" placeholder="Mailing List">
            <small><?= $errors['subject'] ?? '' ?></small>
        </div>
    
        <div>
            <label for="message">Message</label>
            <br>
            <textarea id="message" name="message" rows="5"><?= $inputs['message'] ?? '' ?></textarea>
            <small><?= $errors['message'] ?? '' ?></small>
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
</html>