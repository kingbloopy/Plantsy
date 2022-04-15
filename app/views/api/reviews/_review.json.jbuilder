json.extract! review, :id, :rating, :content, :reviewer_id

json.date review.created_at.strftime("%b %e, %Y")
json.reviewer review.reviewer.name