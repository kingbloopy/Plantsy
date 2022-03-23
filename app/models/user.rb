class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :session_token, uniqueness: true, presence: true
  # validates :email, uniqueness: true
  # validate :email_presence
  validate :is_valid_email
  validates :email, uniqueness: { message: 'you have entered is already in use.' }
  validate :name_presence
  validate :password_minimum

  has_many :products,
  foreign_key: :seller_id,
  class_name: :Product

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def self.invalid_email?(check_email)
    return true if check_email.length < 5

    at_count = check_email.count('@')
    period_count = check_email.count('.')

    if (at_count != 1)
      return true
    elsif (period_count != 1)
      return true
    end

    at_idx = check_email.index('@')
    period_idx = check_email.index('.')
    if (check_email[period_idx + 1]).nil? || (check_email[period_idx - 1]).nil?
      return true
    end
    if (check_email[at_idx + 1]).nil? || (check_email[at_idx- 1]).nil?
      return true
    end

    false
  end

  private

  def password_minimum
    if !password.nil? && password.length < 6
      errors[:base] << 'Must be at least 6 characters.'
    end
  end
  
  def name_presence
    if !name.present?
      errors[:base] << 'First name can\'t be blank.'
    end
  end

  def is_valid_email
    if !email.present?
      errors[:base] << 'Email can\'t be blank.'
    end

    at_count = email.count('@')
    period_count = email.count('.')
    if User.invalid_email?(email)
      errors[:base] << 'Please enter a valid email address.'
    end
  end

end
